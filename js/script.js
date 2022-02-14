const resultsContainer = document.querySelector(".results");
const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

async function apiCall() {
  try {
    const response = await fetch(url);
    console.log(response)
    const result = await response.json();
    console.log(result)
    resultsContainer.innerHTML += message("success", "API call successful")

    for (let i = 0; i < result.length; i++) {
      if (result[i].teamName.startsWith("C")) {
        continue;
      } else if (i >= 15) {
        break;
      }

      resultsContainer.innerHTML +=
        `
      <div class="card">
        <h4>Team: ${result[i].teamName}</h4>
        <p>Location: ${result[i].location}</p>
      </div>`
    }
  } catch (error) {
    resultsContainer.innerHTML = message("error", "Something went wrong")
  } finally {
    document.querySelector(".loader").style.display = "none"
  }
}

apiCall()