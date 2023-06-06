import fs from 'fs';
import Axios, { AxiosResponse, AxiosError } from 'axios';

type TeamsTextBlock = {
  type: 'TextBlock';
  text: string;
  size?: 'extraLarge' | 'large' | 'small';
  weight?: 'bolder';
  isSubtle?: boolean;
};

const createTextBlock = ({ text, size, weight, isSubtle }: Omit<TeamsTextBlock, 'type'>): TeamsTextBlock => ({
  type: 'TextBlock',
  text,
  size,
  weight,
  isSubtle,
});

// Refer: https://adaptivecards.io/samples/
const generateTeamsContent = (repo: string, totalCount: number, additionalData: any) => ({
  type: 'message',
  attachments: [
    {
      contentType: 'application/vnd.microsoft.card.adaptive',
      contentUrl: null,
      content: {
        $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
        type: 'AdaptiveCard',
        version: '1.4',
        body: [
          createTextBlock({ text: 'Sprinklr Frontend', size: 'large', weight: 'bolder' }),
          createTextBlock({ text: `**Repo:** ${repo}`, size: 'small', weight: 'bolder' }),
          createTextBlock({ text: `**Total number of test cases :** ${totalCount}`, size: 'small', weight: 'bolder' }),
          ...additionalData,
        ],
      },
    },
  ],
});

const getTotalTests = (fileName: string): number => {
  const ciResult = fs.readFileSync(fileName);
  return JSON.parse(ciResult.toString())?.numTotalTests || 0;
};

const main = async (): Promise<void> => {
  const TEAMS_WEKHOOK_URL = process.argv[2];
  let totalCount = 0;
  const teamsMsgBody: Array<TeamsTextBlock> = [];

  try {
    const ciJsons = fs.readdirSync('./').filter(fn => fn.endsWith('-ci-results.json'));
    ciJsons.forEach(function (file) {
      const projectTestsCount = getTotalTests(`./${file}`);
      totalCount += projectTestsCount;
      teamsMsgBody.push(
        createTextBlock({
          text: `**${file.replace('-ci-results.json', '')}**: ${projectTestsCount}`,
          size: 'small',
          weight: 'bolder',
          isSubtle: true,
        })
      );
    });

    Axios.post(TEAMS_WEKHOOK_URL, generateTeamsContent('spaceweb', totalCount, teamsMsgBody), {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(function (response: AxiosResponse) {
        console.log(`Request has succeeded with status message: ${response.status}`);
      })
      .catch(function (reason: AxiosError) {
        console.log(`Request has failed with status code: ${reason.response?.status}`);
      });
  } catch (err) {
    console.error(err);
  }
};

main();
