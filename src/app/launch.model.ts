export interface Rocket {
    rocket_name: string;
    rocket_type: string;
  }
  
  export interface Links {
    mission_patch_small: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
  }
  
  export interface Launch {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    details: string;
    rocket: Rocket;
    links: Links;
  }
  