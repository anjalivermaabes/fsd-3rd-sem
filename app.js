import fs from 'fs'

//Readable Streams
const readStream = fs.createReadStream("input.txt")

readStream.on("end",()=>{
    console.log("Finished reading file");
});
readStream.on("error",(error)=>{
    console.log("Error reading file: ",error);
})

//create a writable stream
const writeStream = fs.createWriteStream("output.txt")
writeStream.write("Hello\n")
writeStream.end()

writeStream.on("finish",()=>{
    console.log("Finished writing to file");
});

writeStream.on("error",(error)=>{
    console.log("Error writing to file: ",error);
})