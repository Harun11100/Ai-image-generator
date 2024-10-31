
import OpenAI from 'openai'; // Change here



import express from "express";
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
  });

router.route('/').get((req, res) => {
    res.send('Hello from OpenAI route');
});

router.route('/').post( async (req,res)=>{

      try {
            const {prompt}=req.body;

            const allrespose=await openai.createImage({
                  prompt,
                  n:1,
                  size:'1024x1024',
                  respose_format:'b64_json'
            }) ;

            const image=allrespose.data.data[0].b64_json;
            res.status(200).json({photo:image});

      } catch (error) {
             console.log(error)
             res.status(500).send(error?.respose.data.error.message)
      }
})


export default router;
