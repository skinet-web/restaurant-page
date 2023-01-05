
import navBar from "./navBar";


let contact = () => {
    let contactMain = document.createElement('div');
    contactMain.setAttribute('id', 'contactMain');

    contactMain.innerHTML = `
    <form id='form'>
       <h1> Contact Us</h1> 
       <input type='text' id='text' placeholder='Your Name' required><br>
       <input type='email' id='email' placeholder='Your E-mail' required><br>
       <input  type='number' id='number' placeholder='Your number'>
       <textarea rows="5" columns="5" placeholder="Message"></textarea>
       <button type="submit" >Send message</button>
    </form>
    `
    content.append( navBar(),  contactMain)
    return contact

}

export default contact;