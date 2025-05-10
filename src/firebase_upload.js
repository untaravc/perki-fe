import { storage } from "./firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import moment from "moment";

async function upload(fileName, file) {
  const path = "Perki/JCU25/" + fileName;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(ref(storage, path))
}

function generateFileName(directory, file) {
  let name = moment().format("YYYYMMDD-HHmm");
  name += "-" + randomString(30);
  const fileExtension = file.name.slice(
    ((file.name.lastIndexOf(".") - 1) >>> 0) + 2
  );

  return `${directory}/${name}.${fileExtension}`;
}

function randomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export { upload, generateFileName, randomString };