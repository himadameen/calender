import React, {useEffect, useState} from 'react';

const Form = () => {

    const initialValues = {
        employee_id : "",
        employee_name: "",
        department: "",
        from_date: "",
        to_date: "",
    }

    const [data, setData] = useState(initialValues);
    const [error, setError] = useState({});
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({...data ,[name] :value});
       
    }

    const Submit = (e) => {
        e.preventDefault();
        setError(validate(data));
        console.log(data);
    }

    useEffect(() =>
    {
        const user = JSON.stringify(data);
        localStorage.setItem("data", user);
    },[data]);

    useEffect(() => {
        const update = localStorage.getItem("data");
        const saveData = JSON.parse(update);
        if(saveData){
            setData(saveData);
        };
    }, [])


    const validate = () => {
        const errors= {};
        if(!data.employee_id){
            errors.employee_id = "Employee Id is required";
        }
        else if(data.employee_id &&  data.from_date === localStorage.getItem(data)){
            errors.employee_id = "You have already applied";
        }
        if(!data.from_date){
            errors.from_date = "Select the date";
        }
        if(!data.to_date){
            errors.to_date = "Select the date";
        }
        
        if(data.from_date > data.to_date){
            errors.to_date = "To Date Should be more than from date";
        }
        return errors;
    }

  return (
    <>
        <div className='container'>
            <form onSubmit={Submit}>
                <h1>Employment Leave Details</h1>
                    <div className='ui divider'></div>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Employee ID</label>
                            <input type='text' name='employee_id' placeholder='enter your ID' onChange={handleChange}/>
                        </div>
                        <p>{error.employee_id}</p>
                        <div className='field'>
                            <label> Employee Name</label>
                            <input type='text' name='employee_name' placeholder='enter your name' onChange={handleChange}/>
                        </div>
                        <div className='field'>
                            <label>Department</label>
                            <input type='text' name='department' placeholder='enter your department' onChange={handleChange}/>
                        </div>
                        <div className='field'>
                            <label>From Date</label>
                            <input type='date'  onChange={handleChange} name= "from_date" />
                        </div>
                        <p>{error.from_date}</p>
                        <div className='field'>
                            <label> To Date</label>
                            <input type='date'  onChange={handleChange} name="to_date" />
                        </div>
                        <p>{error.to_date}</p>
                        <button className='fluid ui button' id='btn' >Submit</button>
                    </div>
            </form>
        </div>
    </>
  )
}

export default Form;


















// ---------------------------------------------------------------------------------------

// Differance between dates tried ----------------------------------


 // useEffect(() => {
    //     var datef = data.from_date;
    // var datet = data.to_date;
    // console.log(datef);
    // console.log(datet);
    // var diff = (datef- datet);
    // console.log(diff);
    // // var diff = datef.getTime() - datet.getTime();
    // // var diffDays = (diff );
    // // console.log(diff)
    // // console.log(diffDays);

    // }, [])



// Second Approach tried --------------------------------------------------

// import Calendar from 'react-calendar';
// import holidays from 'date-holidays';
// import 'react-calendar/dist/Calendar.css';



// const Form = () => {

//     const [pickDates, setPickDates] = useState(new Date());

//   return (
//     <>
//      <div className='container'>
                
//                 <form>
//                     <h1>Employment Leave Details</h1>
//                     <div className='ui divider'></div>
//                     <div className='ui form'>
//                         <div className='field'>
//                             <label>Employee ID</label>
//                             <input type='text' name='employee_id' placeholder='enter your ID' />
//                         </div>
//                         <div className='field'>
//                             <label> Employee Name</label>
//                             <input type='text' name='employee_name' placeholder='enter your name' />
//                         </div>
//                         <div className='field'>
//                             <label>Department</label>
//                             <input type='text' name='department' placeholder='enter your department' />
//                         </div>
//                         <div className='field'>
//                             <label>From Date</label>
//                             <Calendar onChange={setPickDates} value={pickDates}/>
//                         </div>
//                         <div className='field'>
//                             <label> To Date</label>
//                             <Calendar onChange={setPickDates} value={pickDates}/>
//                         </div>
//                         <button className='fluid ui button' id='btn'>Submit</button>
//                     </div>
//                 </form>
//             </div>
//     </>
//   )
// }
