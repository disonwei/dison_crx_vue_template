import {Storage} from "@plasmohq/storage"

const storage = new Storage()

await storage.set("key", "value")
const data = await storage.get("key") // "value"


export class StorageServe {




}