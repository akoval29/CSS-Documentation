const clickSound = new Audio("src/bup.ogg"); // muz
const divs = document.querySelectorAll("[id]"); // знаходимо ВСІ div, які мають id
const navEl = document.querySelector(".page__1"); // знаходимо секцію куди будем генерувати <a>
for (let i = 0; i < divs.length; i++) {
  const id = divs[i].getAttribute("id"); // забираєм attribute

  const a = document.createElement("a");
  a.setAttribute("href", `#${id}`); // вставляєм attribute в href
  a.textContent = `Display: ${id}`;

  a.addEventListener("click", (event) => {
    // накидуєм звук кліка
    event.preventDefault(); // відміняємо стандартну дію

    const targetElement = document.querySelector(`#${id}`);
    const offset = 90; // Зсув на 60 пікселів
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    clickSound.currentTime = 0;
    clickSound.play();
  });

  navEl.appendChild(a);
}
