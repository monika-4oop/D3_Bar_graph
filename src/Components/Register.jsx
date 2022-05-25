import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.scss'


export const Register = () => {
    
    const [data , setData] = React.useState([])

    const [form, setForm] = React.useState({
        email: "",
        password: "",
        confirm: "",
        fullname: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

   const [ class1 , setClass1 ] = React.useState('span')

   const [ class2 , setClass2 ] = React.useState('span')

   const [ class3 , setClass3 ] = React.useState('span')

   const [ class4 , setClass4 ] = React.useState('span')

    const onSubmit = (e) => {
        e.preventDefault();
        setData( 
          [
            ...data,
            form
          ]
        )

        //Email Validation
        if( !form.email ){
          setClass1('span-email')
        }

        if ( form.email ) {
          let lastAtPos = form.email.lastIndexOf("@");
          let lastDotPos = form.email.lastIndexOf(".");
    
          if (
            !(
              lastAtPos < lastDotPos &&
              lastAtPos > 0 &&
              form.email.indexOf("@@") == -1 &&
              lastDotPos > 2 &&
              form.email.length - lastDotPos > 2
            )
          ) {
            setClass1('span-email')
          }else{
            setClass1('span')
          }
        }


        // Password confirmation
        if(form.password.length == 0){
          setClass2('span-email')
        }else{
          setClass2('span')
        }
        
        if( !(form.password == form.confirm)){
          setClass3('span-email')
        }else{
          setClass3('span')
        }

       //Phone number validation
        if( !(form.phone.length == 10)){
          setClass4('span-email')
        }else{
          setClass4('span')
        }

        if( class1 == 'span' && class2 == 'span' && 
            class3 == 'span' && class4 == 'span' && 
            form.email && form.password && form.confirm &&
            form.fullname && form.phone){
          navigatePage()
        }
    }

    React.useEffect(() => {
    } ,  [data] );


    let navigate = useNavigate()
    const navigatePage = () => {
        navigate(`/barchart`)
    }

  return (
    <section className = 'container'>
            
            <div className = 'leftcontainer'>
                <img src={require('./img.jpeg')} />
            </div>

            <div className = 'rigthcontainer'>

              <form onSubmit = {onSubmit} className = 'form'>

               <div className="contain">
                    <div><span>Email</span></div>
                    <div> <input onChange={handleChange} name="email" type="text" placeholder="Enter your Email" />  </div>
                    <div> <span className={class1} >Wrong email</span> </div>
               </div>


               <div className="contain">
                    <div><span>Password</span></div>
                    <div> <input onChange={handleChange} name="password" type="password" placeholder="Enter your Password" />  </div>
                    <div> <span className={class2} >Wrong password</span> </div>
               </div>

               <div className="contain">
                    <div><span>Confirm Password</span></div>
                    <div> <input onChange={handleChange} name="confirm" type="password" placeholder="Confirm your Password" />  </div>
                    <div> <span className={class3} >Wrong confirm password</span></div>
               </div>

               <div className="contain">
                    <div><span>FullName</span></div>
                    <div> <input onChange={handleChange} name="fullname" type="text" placeholder="Enter your FullName" />  </div>
               </div>

               <div className="contain">
                    <div><span>Phone</span></div>
                    <div> <input onChange={handleChange} name="phone" type="number" placeholder="Enter your Phone Number" />  </div>
                    <div> <span className={class4}>Invalid phone number</span> </div>
               </div>

               <div className="contain">
                    <button type="submit" >Create Account</button>
               </div>

              </form>

            </div>

        </section>

  )
}
