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
  animation: 2s infinite bgcolorchange;"><div class="row" style="margin: 0px; padding: 0px;">
  <div class="col-md-12 col-12" style="margin: 0px; padding: 100px 0px 0px 0px; text-align: center; width: 100%; height: 900px; text-decoration: underline;">
    <h1 onclick="ElieCarReviewIndustry()" style="cursor: pointer;">Car Industry</h1>  
    <br><br>
    <h1 onclick="ElieCarReviewRealEstate()" style="cursor: pointer;">Real Estate</h1>
    <br><br>
    <h1 onclick="ElieCarReviewEBC()" style="cursor: pointer;">Eddy Balthazar College</h1>
  </div>
</div></div>${ElieCarReviewFooter}`

};
function ElieCarReviewIndustry() {
  document.body.innerHTML = `${ElieCarReviewNav}<div style="background-color: white; padding: 30px; border-radius: 30px; -webkit-animation: bgcolorchange 4s infinite;
  animation: 2s infinite bgcolorchange;""> <div class="row" style="margin: 0px; padding: 0px;">
  <div class="col-12" style="margin: 0px; padding: 50px 0px 0px 0px; text-align: center; width: 100%; height: 900px; text-decoration: underline;">
    <h1>All the models of cars in one place</h1>  
    <br><br>
    <select>
      <option value="A">AAD</option>
      <option value="B">Abadal</option>
      <option value="C">Abarth</option>
      <option value="E">ABC</option>
      <option value="CA">Aberdonia</option>
      <option value="CO">ABT Sportsline</option>
      <option value="CT">Acadian</option>
      <option value="DE">Acura</option>
      <option value="DC">Alfa Romeo Automobiles</option>
      <option value="FL">Alpina</option>
      <option value="GA">AM General</option>
      <option value="HI">Apal</option>
      <option value="ID">Aston Martin</option>
      <option value="IL">Audi</option>
      <option value="IN">Austin</option>
      <option value="IA">AWZ</option>
      <option value="KS">Barkas</option>
      <option value="KY">Bentley</option>
      <option value="LA">Bitter</option>
      <option value="ME">BMW</option>
      <option value="MD">Borgward</option>
      <option value="MA">Bugatti</option>
      <option value="MI">Buick</option>
      <option value="MN">Büssing</option>
      <option value="MS">Cadillac</option>
      <option value="MO">Chevrolet</option>
      <option value="MT">Chrysler</option>
      <option value="NE">Citroen</option>
      <option value="NV">Corvette</option>
      <option value="NH">Dacia</option>
      <option value="NJ">Daihatsu</option>
      <option value="NM">Datsun</option>
      <option value="NY">DKW</option>
      <option value="NC">Dodge</option>
      <option value="ND">Eagle</option>
      <option value="OH">Ferrari</option>
      <option value="OK">Fiat</option>
      <option value="OR">Ford</option>
      <option value="PA">Genesis</option>
      <option value="RI">Glas</option>
      <option value="SC">GMC</option>
      <option value="SD">Goliath</option>
      <option value="TN">Gumpert</option>
      <option value="TX">Hansa</option>
      <option value="UT">Utah</option>
      <option value="VT">Hartge</option>
      <option value="VA">Heinkel</option>
      <option value="WA">Hennessey</option>
      <option value="WV">Honda</option>
      <option value="WI">Horch</option>
      <option value="WY">Hyundai</option>
      <option value="TN">Infiniti</option>
      <option value="TX">Isdera</option>
      <option value="UT">Isuzu</option>
      <option value="VT">Jaguar</option>
      <option value="VA">Jeep</option>
      <option value="WA">Keinath</option>
      <option value="WV">Kia Motors Corporation</option>
      <option value="WI">Koenigsegg</option>
      <option value="WY">Wyoming</option>
      <option value="TN">Lamborghini</option>
      <option value="TX">Lancia</option>
      <option value="UT">Land Rover</option>
      <option value="VT">Lexus</option>
      <option value="VA">Lloyd</option>
      <option value="WA">Lotec</option>
      <option value="WV">Lotus</option>
      <option value="WI">Mahindra & Mahindra</option>
      <option value="WY">Mansory</option>
      <option value="TN">Maserati</option>
      <option value="TX">Maybach</option>
      <option value="UT">McLaren</option>
      <option value="VT">Melkus</option>
      <option value="VA">Mercedes-Benz</option>
      <option value="WA">Mercury</option>
      <option value="WV">Mini</option>
      <option value="WI">Mitsubishi</option>
      <option value="WY">Mosler Automotive</option>
      <option value="TX">Multicar</option>
      <option value="UT">NAG</option>
      <option value="VT">Neoplan</option>
      <option value="VA">Nissan</option>
      <option value="WA">Opel</option>
      <option value="WV">Pagani</option>
      <option value="WI">Panoz</option>
      <option value="WY">Peugeot</option>
      <option value="TX">Piaggio</option>
      <option value="UT">Plymouth</option>
      <option value="VT">Pontiac</option>
      <option value="VA">Porsche</option>
      <option value="WA">Ram</option>
      <option value="WV">Renault</option>
      <option value="WI">Rolls-Royce</option>
      <option value="WY">Saab</option>
      <option value="TX">Saturn</option>
      <option value="UT">Scion</option>
      <option value="VT">SEAT, S.A.</option>
      <option value="VA">Skoda Auto</option>
      <option value="WA">Ram</option>
      <option value="WV">Renault</option>
      <option value="WI">Rolls-Royce</option>
      <option value="WY">Saab</option>
      <option value="TX">Subaru</option>
      <option value="UT">Suzuki Motor Corporation</option>
      <option value="VT">Tata Motor</option>
      <option value="VA">Tesla Motors</option>
      <option value="WA">Toyota</option>
      <option value="WV">Volkswagen</option>
      <option value="WI">Volvo</option>
      <option value="WY">Wiesmann</option>
    </select>
    <br><br>
    <select name="year">
      <option value="1982">2024</option>
      <option value="1981">2023</option>
      <option value="1980">2022</option>
      <option value="1979">2021</option>
      <option value="1978">2020</option>
      <option value="1977">2019</option>
      <option value="2018">2018</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2015">2015</option>
      <option value="2014">2014</option>
      <option value="2013">2013</option>
      <option value="2012">2012</option>
      <option value="2011">2011</option>
      <option value="2010">2010</option>
      <option value="2009">2009</option>
      <option value="2008">2008</option>
      <option value="2007">2007</option>
      <option value="2006">2006</option>
      <option value="2005">2005</option>
      <option value="2004">2004</option>
      <option value="2003">2003</option>
      <option value="2002">2002</option>
      <option value="2001">2001</option>
      <option value="2000">2000</option>
      <option value="1999">1999</option>
      <option value="1998">1998</option>
      <option value="1997">1997</option>
      <option value="1996">1996</option>
      <option value="1995">1995</option>
      <option value="1994">1994</option>
      <option value="1993">1993</option>
      <option value="1992">1992</option>
      <option value="1991">1991</option>
      <option value="1990">1990</option>
      <option value="1989">1989</option>
      <option value="1988">1988</option>
      <option value="1987">1987</option>
      <option value="1986">1986</option>
      <option value="1985">1985</option>
      <option value="1984">1984</option>
      <option value="1983">1983</option>
      <option value="1982">1982</option>
      <option value="1981">1981</option>
      <option value="1980">1980</option>
      <option value="1979">1979</option>
      <option value="1978">1978</option>
      <option value="1977">1977</option>
  </select>
    <br><br>
    <fieldset>
      <legend style="text-align: center;">Select your action:</legend>
    
      <div>
        <input type="radio" name="drone" id="car-review" checked />
        <label for="car-review">Car Review</label>
      </div>
    
      <div>
        <input type="radio" name="drone" id="dealership" />
        <label for="dealership">Dealership</label>
      </div>
    
      <div>
        <input type="radio"  name="drone" id="car-review-and-dealership" />
        <label for="car-review-and-dealership">Car Review and Dealership</label>
      </div>
    
      <div>
          <input type="radio" id="other" name="drone" value="other" />
          <label for="other">Other</label>
        </div>
    </fieldset>
    <br>
    <button id="sumbit" type="submit" style="background-color: black; padding: 5px 10px 5px 10px; border-radius: 20px; color: white;">Send</button>
  </div>
</div></div>${ElieCarReviewFooter}`

};
function ElieCarReviewRealEstate() {
  document.body.innerHTML = `${ElieCarReviewNav}<div style="background-color: white; padding: 30px; border-radius: 30px; -webkit-animation: bgcolorchange 4s infinite;
  animation: 2s infinite bgcolorchange;"> <div class="row" style="margin: 0px; padding: 0px;">
  <div class="col-md-12 col-12" style="margin: 0px; padding: 50px 0px 0px 0px; text-align: center; width: 100%; height: 900px; text-decoration: underline;">
    <h1>To see the best option of real estate in the USA:</h1>  
    <br><br>
    <select>
    <option value="AL">Select your state</option>
      <option value="AL">Alabama</option>
      <option value="AK">Alaska</option>
      <option value="AZ">Arizona</option>
      <option value="AR">Arkansas</option>
      <option value="CA">California</option>
      <option value="CO">Colorado</option>
      <option value="CT">Connecticut</option>
      <option value="DE">Delaware</option>
      <option value="DC">District Of Columbia</option>
      <option value="FL">Florida</option>
      <option value="GA">Georgia</option>
      <option value="HI">Hawaii</option>
      <option value="ID">Idaho</option>
      <option value="IL">Illinois</option>
      <option value="IN">Indiana</option>
      <option value="IA">Iowa</option>
      <option value="KS">Kansas</option>
      <option value="KY">Kentucky</option>
      <option value="LA">Louisiana</option>
      <option value="ME">Maine</option>
      <option value="MD">Maryland</option>
      <option value="MA">Massachusetts</option>
      <option value="MI">Michigan</option>
      <option value="MN">Minnesota</option>
      <option value="MS">Mississippi</option>
      <option value="MO">Missouri</option>
      <option value="MT">Montana</option>
      <option value="NE">Nebraska</option>
      <option value="NV">Nevada</option>
      <option value="NH">New Hampshire</option>
      <option value="NJ">New Jersey</option>
      <option value="NM">New Mexico</option>
      <option value="NY">New York</option>
      <option value="NC">North Carolina</option>
      <option value="ND">North Dakota</option>
      <option value="OH">Ohio</option>
      <option value="OK">Oklahoma</option>
      <option value="OR">Oregon</option>
      <option value="PA">Pennsylvania</option>
      <option value="RI">Rhode Island</option>
      <option value="SC">South Carolina</option>
      <option value="SD">South Dakota</option>
      <option value="TN">Tennessee</option>
      <option value="TX">Texas</option>
      <option value="UT">Utah</option>
      <option value="VT">Vermont</option>
      <option value="VA">Virginia</option>
      <option value="WA">Washington</option>
      <option value="WV">West Virginia</option>
      <option value="WI">Wisconsin</option>
      <option value="WY">Wyoming</option>
    </select>
    <br><br>
    <label for="city">City:</label><input id="city" placeholder="Current City">
    <br><br>
    <fieldset>
      <legend style="text-align: center;">Select your option:</legend>
    
      <div>
        <input type="radio" name="drone" id="sell" checked />
        <label for="sell">Sell</label>
      </div>
    
      <div>
        <input type="radio" name="drone" id="buy" />
        <label for="buy">Buy</label>
      </div>
    
      <div>
        <input type="radio"  name="drone" id="rent" />
        <label for="rent">Rent</label>
      </div>
    
      <div>
          <input type="radio" id="other" name="drone" value="other" />
          <label for="other">Other</label>
        </div>
    </fieldset>
    <br>
    <button id="sumbit" type="submit">Send</button>
  </div>
</div></div>${ElieCarReviewFooter}`

};
function ElieCarReviewEBC() {
  document.body.innerHTML = `${ElieCarReviewNav}<div style="background-color: white; padding: 30px; border-radius: 30px;-webkit-animation: bgcolorchange 4s infinite;
  animation: 2s infinite bgcolorchange;"><div id="carouselAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="Panorama.jpg" style="width: 100%; height: 500px;">
    </div>
    <div class="carousel-item">
      <img src="message.jpg" style="width: 100%; height: 500px;">
    </div>
    <div class="carousel-item">
      <img src="EBC.JPG" style="width: 100%; height: 500px;">
    </div>
    <div class="carousel-item">
      <img src="Eliep1.jpg" style="width: 100%; height: 500px;">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<section class="bottom" style="text-align: center;">
  <h1 style="text-align: center;">Elie Balthazar: "As the Principal of Eddy Balthazar College I am very delighted to
    present the online campus for teachers, parents and students."</h1>
  <fieldset>
    <legend style="text-align: center;">Select a status:</legend>

    <div>
      <input type="radio" id="administration" name="drone" value="administration" checked />
      <label for="administration">Administration</label>
    </div>

    <div>
      <input type="radio" id="pedagogy" name="drone" value="pedagogy" />
      <label for="pedagogy">Pedagogy</label>
    </div>

    <div>
      <input type="radio" id="parent" name="drone" value="parent" />
      <label for="parent">Parent</label>
    </div>

    <div>
      <input type="radio" id="student" name="drone" value="student" />
      <label for="student">Student</label>
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
  <button type="submit">Submit</button>
</section></div>${ElieCarReviewFooter}`

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