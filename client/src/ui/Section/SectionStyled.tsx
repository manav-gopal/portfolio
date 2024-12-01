import SectionTitle from "../../utils/SectionTitle";

interface PropTypes {
    title: string,
    subtitle: string,
    id: string,
    children: React.ReactNode,
}

const SectionStyled = ({title, subtitle, id , children}: PropTypes) => {
  return (
    <section
      id={id}
      className="flex flex-col items-center justify-start w-full overflow-hidden-web"
    >
      <div className="w-full xl:w-[70%] relative flex flex-col items-center ">
        <div className="w-full h-[20%] mb-10 max-lg:mb-0">
          <SectionTitle title={title} subtitle={subtitle} />
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionStyled;
