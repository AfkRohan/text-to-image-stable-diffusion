const url = "https://stablediffusionapi.com/api/v3/text2img";
let api_key = "ENTER API KEY"
let posPrompt,negative_prompt,width,height,samples;
// Setter function for API KEY
const setAPIKey = (key) => api_key=key;
// Setter function for prompt
const setPrompt = (prompt) => posPrompt = prompt; 
// Setter function for negative prompt
const setNegativePrompt = (neg_prompt) => negative_prompt = neg_prompt;
// Setter function for Image Dimensions
const setImageDimensions=(w=512,h=512) =>{
    width = Math.abs(w);
    height = Math.abs(h);
}
// Setter function for image width
const setImageWidth = (w) => {
    width = Math.abs(w);
}
// Setter function for image height
const setImageHeight = (h) => {
    height = Math.abs(h);
}

// General function to set all the parameters for generating images
const setParameters = (api_key='ENTER API KEY',prompt="Dog",neg_prompt = '',width=512,height=512)=>{
   setAPIKey(api_key);
   setPrompt(prompt);
   setNegativePrompt(neg_prompt);
   setImageDimensions(width,height);
}

// Function to generate images
const generateImages = async () =>{
    let imgURL = null;
    if(api_key=='ENTER API KEY'){
        console.log('first use the setAPIKey(key) to set the api key ');
        return;
    }
    const rqbody = JSON.stringify({
    "key": `${api_key}`,
    "prompt": `${posPrompt}`,
    "negative_prompt": `${negative_prompt}`,
    "width": `${width}`,
    "height": `${height}`,
    "samples": 1,
    "num_inference_steps": "20",
    "safety_checker": "no",
    "enhance_prompt": "yes",
    "seed": null,
    "guidance_scale": 7.5,
    "multi_lingual": "no",
    "panorama": "no",
    "self_attention": "no",
    "upscale": "no",
    "embeddings_model": "embeddings_model_id",
    "webhook": null,
    "track_id": null
  });

   await fetch('https://stablediffusionapi.com/api/v3/text2img', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: rqbody
}).then(response => response.json()).then(response => {
    if(response){
    const imgObj = JSON.parse(JSON.stringify(response));
    imgURL = imgObj.output;
    console.log(imgURL);
    }
    else{
        console.log("something went wrong")
    }
});
return imgURL;
}

const stableDiffusionGenerate = {
    setAPIKey,
    setPrompt,
    setNegativePrompt,
    setImageHeight,
    setImageWidth,
    setImageDimensions,
    setParameters,
    generateImages,
}

export default stableDiffusionGenerate;