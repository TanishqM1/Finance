const ExpenseSchema = require("../models/ExpenseModel")


exports.addExpense = async(req,res) =>{
    const{title, amount, category, description, date} = req.body

    const income = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //input error
        if (!title || !category || !description || !date){
            return res.status(400).json({message: 'Please fill out all fields!'})
        }
        if (amount<= 0 || !amount ==='number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await income.save()
        res.status(200).json({message: 'Expense Successfully Added'})
    } catch (error) {
        res.status(500).json({message: 'Unexpected Error'})
    }

    console.log(income);
}

exports.getExpense = async(req,res) =>{
    try {
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.stauts(500).json({message: "Server Error"})
    }
}

exports.deleteExpense = async(req,res) =>{
   const {id} = req.params;
   ExpenseSchema.findByIdAndDelete(id).then((income)=>{
    res.status(200).json({message: "Expense Deleted"})
   })
   .catch((err) =>{
    res.stats(500).json({message: 'Server Error'})
   })
   
}