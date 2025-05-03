import React from 'react';

const workouts = [
  {
    name: "Chest Workout",
    image: "https://i.ytimg.com/vi/UoC_O3HzsH0/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=UoC_O3HzsH0"
  },
  {
    name: "Shoulder Workout",
    image: "https://i.ytimg.com/vi/qEwKCR5JCog/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=qEwKCR5JCog"
  },
  {
    name: "Arms Workout",
    image: "https://i.ytimg.com/vi/2-LAMcpzODU/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=2-LAMcpzODU"
  },
  {
    name: "Back Workout",
    image: "https://i.ytimg.com/vi/vcBig73ojpE/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=vcBig73ojpE"
  },
  {
    name: "Six Pack Abs",
    image: "https://i.ytimg.com/vi/1919eTCoESo/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=1919eTCoESo"
  },
  {
    name: "Fat Burn Workout",
    image: "https://i.ytimg.com/vi/ml6cT4AZdqI/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=ml6cT4AZdqI"
  },
  {
    name: "Thigh Workout",
    image: "https://i.ytimg.com/vi/2pLT-olgUJs/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=2pLT-olgUJs"
  },
  {
    name: "Vins Workout",
    image: "https://i.ytimg.com/vi/kAXq2wyldvQ/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=kAXq2wyldvQ"
  }
];

const Tutorials = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Workout Tutorials</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "30px" }}>
        {workouts.map((workout, index) => (
          <a
            key={index}
            href={workout.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{ border: "1px solid #ccc", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <img src={workout.image} alt={workout.name} style={{ width: "100%", height: "auto" }} />
              <div style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}>{workout.name}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
