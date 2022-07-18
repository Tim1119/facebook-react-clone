import { faker } from "@faker-js/faker";

function getStories() {
  let stories = [];
  for (let i = 0; i < 5; i++) {
    const userData = {
      name: faker.name.findName(),
      storyImage:faker.image.fashion(1234, 2345, true),
      userImage:faker.image.people(1234, 2345, true)
    }
    stories.push(userData)
  }
  return stories;
}
function getRoomUsers() {
  let roomUsers = [];
  for (let i = 0; i < 12; i++) {
    const images = {
     
      storyImage:faker.image.fashion(1234, 2345, true),
      userImage:faker.image.people(1234, 2345, true)
    }
    roomUsers.push(images)
  }
  return roomUsers;
}
function getRandomUsers() {
  let randomPeople = [];
  for (let i = 0; i < 7; i++) {
    const data = {
      name: faker.name.findName(),
      userImage:faker.image.people(1234, 2345, true)
    }
    randomPeople.push(data)
  }
  return randomPeople;
}

export { getStories,getRoomUsers,getRandomUsers };
