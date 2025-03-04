/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

//import {onRequest} from "firebase-functions/v2/https";

//import * as logger from "firebase-functions/logger";

const functions = require("firebase-functions");
const express = require("express");
const app = express();
import {Request, Response} from "express";


exports.hello = functions.https.onRequest((req:Request, res:Response) => {
    res.send('Hello from Firebase!');
  });


exports.api = functions.https.onRequest(app);

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
