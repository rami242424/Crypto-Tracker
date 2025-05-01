// 방법1 : async와 await사용
// export async function fetchCoins(){
//     const response = await fetch("https://api.coinpaprika.com/v1/coins");
//     const json = await response.json();
//     return json;
// }

// 방법2 : promise사용
export function fetchCoins(){
    return fetch("https://api.coinpaprika.com/v1/coins").then((response) => response.json()
    );
}