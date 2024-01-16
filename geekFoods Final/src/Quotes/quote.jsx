import QuoteItem from "./quoteItem";
import quotes from "./quotesList.json";

const Quotes = () => {
  console.log(quotes);
  return (
    <div className="grid gap-8 p-4 py-32 mx-auto lg:gap-12 ">
      {quotes.map((quote) => (
        <QuoteItem quote={quote.quote} author={quote.author} />
      ))}
    </div>
  );
};

export default Quotes;
