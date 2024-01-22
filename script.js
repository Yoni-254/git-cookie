let clickcount = 0;

function clickCookie() {
    clickcount++;
    document.getElementById('clicks').innerText = clickcount;
}

function resetClicks() {
    clickcount = 0;
    document.getElementById('clicks').innerText = clickcount;
}

function buyUpgrade() {
    
    alert("Not enough currency to buy the upgrade!");
    
}