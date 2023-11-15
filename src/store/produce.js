import produceData from "../mockData/produce.json";


const POPULATE = "produce/POPULATE";



export const populateProduce = () => {
    return {
      type: POPULATE,
      produce: produceData,
    };
  };
  

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE: {
       const normalizedByForEach= {}
       action.produce.forEach((pro) => normalizedByForEach[pro.id] = pro)
       return normalizedByForEach
    }
    default:
      return state;
  }
}


