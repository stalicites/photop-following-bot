let elements = document.getElementsByClassName("previewFollowButton");
let index = 0;
let waitTime = 10000; // In MS

for (let i = 0; i < elements.length; i++) {
  if (elements[i].style.backgroundColor != "rgb(255, 92, 92)" && i < elements.length) {
        // I have to check the background color to see if the user is followed 
        // There's literally no other way to check
        await sleep(waitTime);
        elements[i].click();
  } else {
    console.log("User is already followed");
  }
  console.log(`Passed through ${i}`);
}

/*
Paste this in the console of a user's following account to follow whoever you want.
You have to be on the page that shows their followers, and load all their followers first. 
After that, you can run this script
*/
