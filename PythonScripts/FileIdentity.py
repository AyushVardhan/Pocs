import os
import shutil

import filetype

if __name__ == "__main__":

    pathAndPattern = "/Users/ayushvardhan/Documents/Music/*.mp3"
    directory = "/Users/ayushvardhan/Documents/Music/"

    musicFiles = []

    for filename in os.listdir(directory):
        kind = filetype.guess(str(directory + filename))
        if kind is None or 'audio/' not in kind.MIME:
            continue
        musicFiles.append(filename)

    print("Total music files identified : " + str(len(musicFiles)))

    for file in musicFiles:
        musicFileName = file[36:]
        shutil.copy(directory+file, '/Users/ayushvardhan/Documents/Music2')
