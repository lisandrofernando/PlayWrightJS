import {test, expect} from '@playwright/test';


test("Get API Test", async({request})=>{
    const response =  await request.get("https://restful-booker.herokuapp.com/booking")
    console.log(await response.json())
})