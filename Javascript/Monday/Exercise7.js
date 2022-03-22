=> comparisonPrice(price, weight) {
    return price * (100 / weight);
  }
  
  console.log(`Jämförelsepris: ${comparisonPrice(100, 500)}kr `);
  