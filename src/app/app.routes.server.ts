import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'mission/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Example: You can dynamically fetch this from the API
      const response = await fetch('https://api.spacexdata.com/v3/launches');
      const launches = await response.json();

      return launches.map((launch: any) => ({
        id: launch.flight_number.toString()
      }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
