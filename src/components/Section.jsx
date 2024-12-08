import Button from "./Button";

function Section({ item }) {
    return (
        <section>
          <h2>{item.title}</h2>
          {item.buttonsTitle.map((title) => (
            <Button key={title} title={title} />
          ))}
        </section>
    )
}

export default Section;
