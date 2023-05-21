# text-to-image-stable-diffusion

This package can be used to generate images by providing prompts using stable diffusion api.

Go to 'https://stablediffusionapi.com/'

Create an account and login if not logged in.

Click on the Playground tab.

Select API endpoint as 'text to image'.

Now, Click on API settings and get and click on view the api key and then copy it in notepad file.
Use this api key in the code to generate images.
 

This package outputs the image url generated by the prompts in an array.

You can use the url to either fetch the image from the url or download the image by fetching from the url.

You need a stable diffusion api key before using the package.

You need to set your api key before using the package:
You can use the setAPIKey(key) function for this purpose
or the setParameters(apikey,prompt,negative prompt,width,height)
function.

After that
You can use generateImages() function for generating the images.

You can set the height and width of the image generated using 
setHeight(h),setWidth(w) or setDimensions(w,h)
By default is 512,512.

You can use setPrompt(prompt)
for setting the  prompt 
such as 'A dog in rain'
and the setNegativePrompt(neg)
for setting the image quality,precision and description.
You can go to stable diffusion docs for getting more info about the api parameters.

Example:
```
import stableDiffusion from 'text-to-image-stable-diffusion';
import https from 'https';
import fs from 'fs';

const API = 'Your API KEY;
const prompt = 'Cartoons';
const negativeprompt = 'High Quality image'
const width = 400;
const height = 400;
stableDiffusion.setParameters(API,prompt,negativeprompt,width,height)
const images = await stableDiffusion.generateImages();
console.log(images);
```
