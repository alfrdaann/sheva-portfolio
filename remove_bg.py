from rembg import remove
from PIL import Image
import sys

try:
    input_path = 'public/images/profile-formal.jpg'
    output_path = 'public/images/profile-formal-cutout.png'
    
    print(f'Opening {input_path}...')
    input_image = Image.open(input_path)
    
    print('Removing background...')
    output_image = remove(input_image)
    
    print(f'Saving to {output_path}...')
    output_image.save(output_path)
    print('Done!')
except Exception as e:
    print(f'Error: {e}')
    sys.exit(1)
