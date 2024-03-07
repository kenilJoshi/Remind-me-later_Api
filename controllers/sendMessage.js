const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()


exports.sendMessage = async (req, res) => {
    const messageBody = req.body
    
    try{
        if(!messageBody.message || !messageBody.date || !messageBody.time){
            
            throw new Error("message or date or time shouldnt be empty");   
        }
        const dateParts = messageBody.date.split("-");
        const timeParts = messageBody.time.split(":");

        const localDate = new Date(Date.UTC(
            parseInt(dateParts[0]),
            parseInt(dateParts[1]) - 1,
            parseInt(dateParts[2]),
            parseInt(timeParts[0]),
            parseInt(timeParts[1])
        ));

        const response = await prisma.message.create({
            data: {
                message: messageBody.message,
                dateTime: localDate
            }
        })
            res.status(200).send(response)
    }catch(e){
        console.log('here');
        res.status(400).send(e.message)
    }
    
}