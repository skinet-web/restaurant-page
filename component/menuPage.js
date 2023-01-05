import navBar from "./navBar";

let menu = () => {
    let menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menuContent');

    let menuBackground = document.createElement('div');
    menuBackground.setAttribute('id', 'menuBackground');


    let menu1 = document.createElement('div');
    menu1.setAttribute('id', 'menu1');
    menu1.innerHTML = `
  <h1>Main course</h1>
<ul>
    <li>Special hamburger
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
    <li>Special hamburger
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
    <li>Special hamburger
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
    <li>Special hamburger
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
    <li>Special hamburger
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
</ul>
    `;
  
  let menu2 = document.createElement('div');
  menu2.setAttribute('id', 'menu2');
  menu2.innerHTML = `
  <h1>Main course</h1>
<ul>
    <li>Special hamburger
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
    <li>Special hamburger
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
    <li>Special hamburger
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
    <li>Special hamburger
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
    <li>Special hamburger
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
</ul>
  `;
    menuContent.append(menu1, menu2, menuBackground)
    content.append(navBar(), menuContent)
    return menu;
}

export default menu;