const endDate = "12 June 2024 8:00 PM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  console.log(end);
  console.log(now);
  const diff = (end - now) / 1000;
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600 % 24);
  inputs[2].value = Math.floor(diff / 60 % 60);
  inputs[3].value = Math.floor(diff % 60);
  //convert into days


}
clock()
setInterval(
  () => {
    clock()
  }, 1000
)