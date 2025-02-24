console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  console.log("test");
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("there was an error");
      return;
    }

    const data = await response.json();
    console.log(data);
    console.log(data.results[2].eye_color);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
