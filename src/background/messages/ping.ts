import type {PlasmoMessaging} from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    const message = "12"

    res.send({
        message
    })
}

export default handler