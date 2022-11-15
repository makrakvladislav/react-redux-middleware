import React from 'react';
import { render } from '@testing-library/react';
import axios, { AxiosResponse } from 'axios';
import Api from '../../../api/api';
import Modal from './Modal';
import { voidFn } from '../../../utils/helpers';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Modal test', () => {
  it('Show modal', async () => {
    const mockedData = {
      adult: false,
      backdrop_path: '/pxK1iK6anS6erGg4QePmMKbB1E7.jpg',
      belongs_to_collection: {
        id: 2344,
        name: 'The Matrix Collection',
        poster_path: '/bV9qTVHTVf0gkW0j7p7M0ILD4pG.jpg',
        backdrop_path: '/bRm2DEgUiYciDw3myHuYFInD7la.jpg',
      },
      budget: 150000000,
      genres: [
        {
          id: 12,
          name: 'Adventure',
        },
        {
          id: 28,
          name: 'Action',
        },
        {
          id: 53,
          name: 'Thriller',
        },
        {
          id: 878,
          name: 'Science Fiction',
        },
      ],
      homepage: '',
      id: 604,
      imdb_id: 'tt0234215',
      original_language: 'en',
      original_title: 'The Matrix Reloaded',
      overview:
        "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance.  Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition. But a nasty piece of news hits the human resistance: 250,000 machine sentinels are digging to Zion and would reach them in 72 hours. As Zion prepares for the ultimate war, Neo, Morpheus and Trinity are advised by the Oracle to find the Keymaker who would help them reach the Source.  Meanwhile Neo's recurrent dreams depicting Trinity's death have got him worried and as if it was not enough, Agent Smith has somehow escaped deletion, has become more powerful than before and has fixed Neo as his next target.",
      popularity: 37.935,
      poster_path: '/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg',
      production_companies: [
        {
          id: 79,
          logo_path: '/tpFpsqbleCzEE2p5EgvUq6ozfCA.png',
          name: 'Village Roadshow Pictures',
          origin_country: 'US',
        },
        {
          id: 172,
          logo_path: null,
          name: 'NPV Entertainment',
          origin_country: 'US',
        },
        {
          id: 1885,
          logo_path: '/tXMFoE8AtNdnFzWOW0aCLwl7xxS.png',
          name: 'Silver Pictures',
          origin_country: 'US',
        },
      ],
      production_countries: [
        {
          iso_3166_1: 'US',
          name: 'United States of America',
        },
      ],
      release_date: '2003-05-15',
      revenue: 738599701,
      runtime: 138,
      spoken_languages: [
        {
          english_name: 'English',
          iso_639_1: 'en',
          name: 'English',
        },
      ],
      status: 'Released',
      tagline: 'Free your mind.',
      title: 'The Matrix Reloaded',
      video: false,
      vote_average: 7.024,
      vote_count: 9348,
    };

    const mockedResponse: AxiosResponse = {
      data: mockedData,
      status: 200,
      statusText: 'ok',
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();
    const response = await Api.getByMovieId(624860);
    const data = [];
    data.push(response!.results);
    expect(axios.get).toHaveBeenCalled();
    if (response !== undefined) {
      expect(data).toEqual([mockedData]);
      const modal = render(<Modal movieId={604} setVisible={voidFn} />);
      expect(modal).toMatchSnapshot();
    }
  });
});
