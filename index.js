const ElieCarReviewNav = `<div class="d-none d-lg-block" style="position: absolute; top: 3%; left: 5%; width: 90%; height: 50px; border-radius: 30px; background-color: aquamarine; -webkit-animation: bgcolorchange 10s infinite;
animation: 10s infinite bgcolorchange;">
<marquee behavior="slide" scrollamount="5" loop="1" direction="down">
<div style="width: 99%; height: 50px; border-radius: 50px; -webkit-animation: bgcolorchange 4s infinite;
animation: 2s infinite bgcolorchange; margin-left: 10px; margin-right: 15px;">

<h5 style="text-align: center; width: 100%; color: rgb(92, 3, 3); cursor: pointer;">

<a href=""
 style="padding-right: 130px; padding-left: 15px; text-decoration: none; color: rgb(92, 3, 3)">Home</a>
<a onclick="ElieCarReviewAbout()" style="padding-right: 130px;">About</a>
<a href="" style="padding-right: 130px;"><img alt="Logo of Car Review" src="ElieCarReviewLogo.jpg"
   style="width: 150px; height: 50px; margin: 0%; padding:0%; border-radius: 20px 20px 20px 10px;"></a>
<a onclick="ElieCarReviewBusiness()" style="padding-right: 130px;">Business</a>
<a onclick="ElieCarReviewContact()" style=" padding-right: 48px;">Contact</a>
</h5>
</div>
</marquee>
</div>
<div class="d-sm-block d-md-block d-lg-none">
<div style="position: absolute; top: 3%; left: 5%; width: 90%; height: 100px; border-radius: 30px; background-color: aquamarine; -webkit-animation: bgcolorchange 10s infinite;
        animation: 10s infinite bgcolorchange;">
      <marquee behavior="slide" scrollamount="20" loop="1" direction="down">
        <div style="width: 99%; height: 100px; border-radius: 50px; -webkit-animation: bgcolorchange 4s infinite;
            animation: 2s infinite bgcolorchange; margin-left: 2px; margin-right: 2px; padding-bottom: 3px; padding-top: 3px;">
            <div class="row" style="margin: 0px; padding: 0px;">
                <div class="col-6" style="margin: 0px; padding: 0px;">
                 <h5 style="text-align: center; width: 100%; color: rgb(92, 3, 3); cursor: pointer;">
            <a href="" style="padding-right: 2px; text-decoration: none; color: rgb(92, 3, 3)">Home</a></h5></div>
            <div class="col-6" style="margin: 0px; padding: 0px;">
            <h5 style="text-align: center; width: 100%; color: rgb(92, 3, 3); cursor: pointer;"><a onclick="ElieCarReviewAbout()">About</a></h5></div>
            <div class="col-12" style="margin: 0px; padding: 0px;"><h5 style="text-align: center;">
            <a href="" style="padding-right: 10px;"><img alt="Logo of Car Review" src="ElieCarReviewLogo.jpg"
                style="width: 80px; height: 30px; margin: 0%; padding: 0%; border-radius: 20px 20px 20px 10px;"></a></h5></div>
                <div class="col-6" style="margin: 0px; padding: 0px;">
                <h5 style="text-align: center; width: 100%; color: rgb(92, 3, 3); cursor: pointer;"> <a onclick="ElieCarReviewBusiness()" style="padding-right: 10px;">Business</a></h5></div>
                <div class="col-6" style="margin: 0px; padding: 0px;">
                <h5 style="text-align: center; width: 100%; color: rgb(92, 3, 3); cursor: pointer;"> <a onclick="ElieCarReviewContact()">Contact</a>
          </h5></div>
        </div>
      </div>
      </marquee>
    </div><br><br>
</div><br><br><br>
`;
const ElieCarReviewFooter = `<div id="Elie-Review-Footer">
<img alt="Elie Car Review Footer" src="ElieCarReviewFooter.jpg"
  style="width: 100%; height: 150px; border-radius: 30px;">
<h4 style="text-align: center;">
  <a href="https://wa.me/17865632692?text=I'm%20interested%20in%20your%20car%20for%20sale"><i
      class="fab fa-whatsapp fa-1x" style="color:green"></i></a>
  <a href="https://www.facebook.com/elie.balthazar"><i class="fab fa-facebook fa-1x"
      style="color:rgb(71, 107, 185);"></i></a>
  <a href="https://www.instagram.com/elie_car_review/"><i class="fab fa-instagram fa-1x"
      style="color:rgb(71, 107, 185);"></i></a>
  <a href="https://www.youtube.com/c/eliebalthazar"><i class="fab fa-youtube fa-1x"
      style="color:rgb(216, 9, 9);"></i></a>
</h4>
<h6 style="text-align: center;">&copy;Elie Balthazar 2024</h6>
</div>`;
function ElieCarReviewAbout() {
  document.body.innerHTML = `${ElieCarReviewNav}<div style="padding: 30px; border-radius: 30px; -webkit-animation: bgcolorchange 4s infinite;
  animation: 2s infinite bgcolorchange;"><div class="row" style="margin: 0px; padding: 0px;">
  <div class="col-md-12 col-lg-12" style="margin: 0px; padding: 0px;">
      <div>
        <br><br>
        <div>
          <marquee behavior="scroll" scrollamount="17" direction="left">
            <h5>About</h5>
          </marquee>
        </div>
        <br>
        <div>
          <h4 style="text-align: center;">
            <audio controls>
              <source src="ElieCarReviewAbout.mp3" type="audio/mpeg">
              <source src="ElieCarReviewAbout.ogg" type="audio/ogg">
            </audio>
          </h4>
        </div>
        <br>
        <div>
          <h6>All the Elie Balthazar Business is the official page of Elie Balthazar which connects users with the car
            industry service. We understand that it is not good behavior to buy things you do not know, so the car
            industry is divided in two sections. The first section is a Car Review which helps to understand a car
            based on the model and its features. Now when you know the car and its features, we connect you with
            dealerships all around the USA to find your car and whenever we recommend you to a dealership, you will be
            beneficiate with special attention from customer services and discount. So for the Real Estate service. We
            explain to you the meaning of having a house, what to look for when you are buying a house.
          </h6>
        </div>
        <br><br>
        <div>
          <h6>All the Elie Bathazar in one place also connect you with the foundation of Elie Balthazar, and if you
            are a parent or a student of Eddy Balthazar College you already have a special account to log in, to have
            access to all the information available to you as teacher, parent or student (Course, scholarship,
            certificate, etc.).
          </h6>
        </div>
        <br><br>
        <div>
          <h6>We do not focus only on doing business with our users, but we have special workshops for them to release
            their potential. Sometimes you listen to a very pessimistic mind saying: “You are all out to say pay
            people, they can accomplish anything.” The answer to this negative thought is: “Yes, we are all out to say
            people, they can accomplish anything.” And the question to this negative mind is: “Do you want us to take
            people to the pessimism side of life to take away motivation?” We understand that you have to help other
            just like we receive help in the pass. We were fortunate to be professional in all the areas we are
            developing ourselves and also, with the help of so many motivational speakers, the challenges of life do
            not defeat us until today.
          </h6>
        </div>
      </div>
  </div>
</div></div>${ElieCarReviewFooter}`
};
function ElieCarReviewBusiness() {
  document.body.innerHTML = `${ElieCarReviewNav}<div style="background-color: white; padding: 30px; border-radius: 30px; -webkit-animation: bgcolorchange 4s infinite;
  animation: 2s infinite bgcolorchange;"></div>${ElieCarReviewFooter}`

};
function ElieCarReviewIndustry() {
  document.body.innerHTML = `${ElieCarReviewNav}<div style="background-color: white; padding: 30px; border-radius: 30px; -webkit-animation: bgcolorchange 4s infinite;
  animation: 2s infinite bgcolorchange;""></div>${ElieCarReviewFooter}`

};
function ElieCarReviewRealEstate() {
  document.body.innerHTML = `${ElieCarReviewNav}<div style="background-color: white; padding: 30px; border-radius: 30px; -webkit-animation: bgcolorchange 4s infinite;
  animation: 2s infinite bgcolorchange;"></div>${ElieCarReviewFooter}`

};
function ElieCarReviewEBC() {
  document.body.innerHTML = `${ElieCarReviewNav}<div style="background-color: white; padding: 30px; border-radius: 30px;-webkit-animation: bgcolorchange 4s infinite;
  animation: 2s infinite bgcolorchange;"></div>${ElieCarReviewFooter}`

};
function ElieCarReviewContact() {
  document.body.innerHTML = `${ElieCarReviewNav}<div style="background-color: white; padding: 30px; border-radius: 30px; -webkit-animation: bgcolorchange 4s infinite;
  animation: 2s infinite bgcolorchange;"><div><marquee behavior="scroll" scrollamount="15" direction="left"><h5>Contact</h5></marquee><br><h4>
  &#128241;+1 786-563-2692 <br><br>
  &#9993;eliebalthazar19@gmail.com <br>
  &#9993elie.balthazar@yahoo.fr
          </h4><br><h5>Social Media:</h5> <h4>
          <a href="https://wa.me/17865632692?text=I'm%20interested%20in%20your%20car%20for%20sale"><i
              class="fab fa-whatsapp fa-1x" style="color:green"></i></a>
          <a href="https://www.facebook.com/elie.balthazar"><i class="fab fa-facebook fa-1x"
              style="color:rgb(71, 107, 185);"></i></a>
          <a href="https://www.instagram.com/elie_car_review/"><i class="fab fa-instagram fa-1x"
              style="color:rgb(71, 107, 185);"></i></a>
          <a href="https://www.youtube.com/c/eliebalthazar"><i class="fab fa-youtube fa-1x"
              style="color:rgb(216, 9, 9);"></i></a>
        </h4></div></div><div id="Elie-Review-Footer">
        <img alt="Elie Car Review Footer" src="ElieCarReviewFooter.jpg"
          style="width: 100%; height: 150px; border-radius: 30px;">
        <h6 style="text-align: center;">&copy;Elie Balthazar 2024</h6>
        </div>`

};
function ElieCarReviewCreateAnAccount() {
  document.body.innerHTML = `${ElieCarReviewNav}<div style="background-color: white; padding: 30px; border-radius: 30px; -webkit-animation: bgcolorchange 4s infinite;
  animation: 2s infinite bgcolorchange;"><br><br><form style="text-align: center">
  <fieldset>
  <legend style="text-align: center;">Select a status:</legend>

  <div>
    <input type="radio" name="drone" id="Real-Estate" checked />
    <label for="Real-Estate">Real Estate</label>
  </div>

  <div>
    <input type="radio" name="drone" id="Car-Industry" />
    <label for="Car-Industry">Car Industry</label>
  </div>

  <div>
      <input type="radio" id="other" name="drone" value="other" />
      <label for="other">Other</label>
    </div>
</fieldset>
<br>
  <label for="name"><b>First Name:</b></label>
  <br>
  <input type="text" placeholder="Enter your first name" name="name" required>
  <br>
  <br>
  <label for="name"><b>Last Name:</b></label>
  <br>
  <input type="text" placeholder="Enter your last name" name="name" required>
  <br>
  <br>
  <label for="email"><b>Email:</b></label>
  <br>
  <input type="text" placeholder="Enter your email" name="email" required>
  <br>
  <br>
  <label for="uname"><b>Username:</b></label>
  <br>
  <input type="text"  name="uname" placeholder="choose a username" required>
  <br>
  <br>
  <label for="psw"><b>Password:</b></label>
  <br>
  <input type="password" placeholder="Create a password" name="psw" required>
  <br>
  <br>
  <label for="psw"><b>Confirm:</b></label>
  <br>
  <input type="password" placeholder="Confirm the password" name="psw" required>
  <br>
  <br>
  <label>
  <input type="checkbox" checked="checked" name="remember"> I confirm all the information is true
  </label> 
  <button type="submit">Submit</button></form></div>${ElieCarReviewFooter}`

};
function ElieCarReviewUnlock() {
  document.body.innerHTML = `${ElieCarReviewNav}<br><div style="background-color: white; padding: 30px; border-radius: 30px;><div>
  <h3 style="text-align: center;">1/7 of the workshop</h3>
  <br><br>
  <div class="row" style="margin: 0px; padding: 0px;">
    <div class="col-md-3 col-lg-3" style="margin: 0px; padding: 0px;"></div>
    <div class="col-md-12 col-lg-6" style="margin: 0px; padding: 0px;">
  <iframe width="100%" height="350" src="https://www.youtube.com/embed/YDc74e2BJY0?si=wbmrOHqJhyXwgWX7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <br><br>
   <button  onclick="ElieCarReviewfirstQA()" style="float: right;">Next</button>
</div>
<div class="col-md-3 col-lg-3" style="margin: 0px; padding: 0px;"></div>
</div>
</div></div>${ElieCarReviewFooter}`

};
function ElieCarReviewfirstQA() {
  document.body.innerHTML = `${ElieCarReviewNav}<br><div style="background-color: white; padding: 30px; border-radius: 30px;><div>
  <h3 style="text-align: center;">1/7 of the workshop</h3>
  <br><br>
  <div class="row" style="margin: 0px; padding: 0px;">
    <div class="col-md-3 col-lg-3" style="margin: 0px; padding: 0px;"></div>
    <div class="col-md-12 col-lg-6" style="margin: 0px; padding: 0px;">
      <form style="text-align: center"><fieldset>
          <legend style="text-align: center;">1)Select the right answer:</legend>
        
          <div>
            <input type="radio" name="drone" id="a" checked />
            <label for="a">Being motivated to accomplish a goal has nothing to see with good mental health.</label>
          </div>
        <br><br><br>
          <div>
            <input type="radio" name="drone" id="b" />
            <label for="b">In life, you have to motivate yourself and have daily, monthly goals.</label>
          </div>
          <br><br><br>
          <div>
            <input type="radio"  name="drone" id="c" />
            <label for="c">In life, you do not have to be happy, nor be motivated.</label>
          </div>
          <br><br><br>
          <div>
              <input type="radio" id="d" name="drone" value="d" />
              <label for="d">We should have fewer people motivating each other.</label>
            </div>
        </fieldset>
        <br><br><br>
        <br>
        <label for="answer"><b>2)Should we read and listen to any kind of texts and speeches?</b></label>
        <input type="text" placeholder="Your answer" name="answer" required>
        <br>
        <br>
        <br>
        <br>
        <label>
        <input type="checkbox" checked="checked" name="remember"> Yes, I will need a certificate after the workshop
        </label> 
        <button type="submit" onclick="ElieCarReviewSignIn()">Submit</button></form>        <br><br>
  <button  onclick="ElieCarReviewUnlock()" style="float: left;">Previous</button><button style="float: right;">Next</button>
</div>
<div class="col-md-3 col-lg-3" style="margin: 0px; padding: 0px;"></div>
</div>
</div></div>${ElieCarReviewFooter}`

};
function ElieCarReviewSignIn() {
  document.body.innerHTML = `${ElieCarReviewNav}<br><div style="background-color: white; padding: 30px; border-radius: 30px;><br><br><div>
  <h3 style="text-align: center;">For us to process your answer and give you the certificate you have to login.</h3>
  <br><br>
  <div class="row" style="margin: 0px; padding: 0px;">
    <div class="col-md-3 col-lg-3" style="margin: 0px; padding: 0px;"></div>
    <div class="col-md-12 col-lg-6" style="margin: 0px; padding: 0px;">
      <label style="padding-top: 5px;"><input type="text" placeholder="Enter your Username" name="uname"
          style="border-radius: 10px; text-align: center;" required></label>
      <br>
      <br>
      <input type="password" placeholder="Enter your Password" name="psw"
        style="border-radius: 10px; text-align: center;" required>
      <br>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
      <button type="submit" style="border-radius: 10px;">Login</button>
      <br>
      <br>
      <button type="submit" onclick="ElieCarReviewCreateAnAccount()" style="border-radius: 10px;">Create
        an
        account</button>
</div>
<div class="col-md-3 col-lg-3" style="margin: 0px; padding: 0px;"></div>
</div>
</div></div>${ElieCarReviewFooter}`

};