from PIL import Image
from pathlib import Path
import os
import numpy as np
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.vgg16 import VGG16, preprocess_input
from tensorflow.keras.models import Model
from FeatureExtractor import FeatureExtractor

fe = FeatureExtractor()
img_root_path = "../dataset"
print("Begin extraction")
totalFiles = 0
totalDir = 0
for base, dirs, files in os.walk(img_root_path):
    print('Searching in : ',base)
    for directories in dirs:
        totalDir += 1
    for Files in files:
        totalFiles += 1

features = []
types=['*.jpg','*.png','*.jpeg','*.JPG','*.PNG','*.JPEG']
for type in types:
    for img_path in sorted(Path(img_root_path).glob(type)):

    # Extract Features
        feature = fe.extract(img=Image.open(img_path))
    # Save the Numpy array (.npy) on designated paths
        feature_path = "feature.npy"
        feature_path = Path("../feature") / (img_path.stem + ".npy")
        np.save(feature_path, feature)
        features.append(feature)

print("Finish extraction")