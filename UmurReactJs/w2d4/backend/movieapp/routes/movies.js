const express = require('express');
const router = require('router');


router.get('/',(req,res)=>{
    res.json([{name:'test movie', rating:4, genre:'comedy'}])
})

router.post('/movies',(req,res)=>{
    res.json([{name:'test movie2', rating:5, genre:'fantasy'}])
})