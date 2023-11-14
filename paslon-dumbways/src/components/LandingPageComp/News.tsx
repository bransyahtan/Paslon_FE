import { newsType } from "../../types/NewsType";
import { BigCard } from "./BigCard";
import rapatKpu from "../../assets/images/rapatKpu.png";
import { SmallCard } from "./SmallCard";

export const News = () => {
  const news: newsType[] = [
    {
      title: "KPU Tetapkan 3 Mentor Terbaik",
      date: "Senin, 08 Feb 2024",
      author: "Kucing Makan",
      image: "../assets/images/rapatKpu.png",
    },
    {
      title: "KPU Tetapkan 3 Mentor Terbaik",
      date: "Selasa, 18 Feb 2024",
      author: "Kucing Lapar",
      image: "../assets/images/rapatKpu.png",
    },
    {
      title: "KPU Tetapkan 3 Mentor Terbaik",
      date: "Rabu, 28 Feb 2024",
      author: "Kucing Tidur",
      image: "../assets/images/rapatKpu.png",
    },
    {
      title: "KPU Tetapkan 3 Mentor Terbaik",
      date: "Kamis, 18 Feb 2024",
      author: "Kucing Lapar",
      image: "../assets/images/rapatKpu.png",
    },
    {
      title: "KPU Tetapkan 3 Mentor Terbaik",
      date: "Kamis, 08 Feb 2024",
      author: "Kucing Tepar",
      image: "../assets/images/rapatKpu.png",
    },
    {
      title: "KPU Tetapkan 3 Mentor Terbaik",
      date: "Kamis, 08 Feb 2024",
      author: "Kucing Makan",
      image: "../assets/images/rapatKpu.png",
    },
    {
      title: "KPU Tetapkan 3 Mentor Terbaik",
      date: "Kamis, 08 Feb 2024",
      author: "Kucing Makan",
      image: "../assets/images/rapatKpu.png",
    },
  ];
  return (
    <>
      <div className="flex justify-center">
        <div className="w-4/5 h-[1400px] my-24 grid grid-cols-3 gap-4">
          {/* <div className="col-span-3">
            <BigCard
              title={news[0].title}
              author={news[0].author}
              date={news[0].date}
              image={rapatKpu}
            />
          </div> */}
          {news.map((item, index) => {
            return index === 0 || index === 6 ? (
              <div className="col-span-2">
                <BigCard
                  title={item.title}
                  author={item.author}
                  date={item.date}
                  image={rapatKpu}
                />
              </div>
            ) : (
              <div className="col-span-1">
                <SmallCard
                  title={item.title}
                  author={item.author}
                  date={item.date}
                  image={rapatKpu}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
