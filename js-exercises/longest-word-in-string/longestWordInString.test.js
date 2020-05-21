import { longestWordInString } from './longestWordInString';

describe('longestWordInString', () => {
  it('should return a string', () => {
    expect(typeof longestWordInString()).toBe('string');
  });
  it('should return the largest word', () => {
    expect(longestWordInString('Monkey D Luffy is the Pirate King.')).toBe('Monkey');
    expect(longestWordInString('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')).toBe('typesetting');
  });
  it('should work with newline character or usage of tab.', () => {
    expect(longestWordInString('The first is using environment variables.\nAll environment variables provided on the run command are exposed to the image.\n\tTherefore any configurations which use environment variables can be set during the run command.\tThe Birdwatch application uses a set of configurations defined in an application.conf file. Assigning environment variables to these items is the only step required to make them configurable.')).toBe('configurations');
    expect(longestWordInString('Once Upon a time,\nI wrote some code,\nIt was meant to do good,\nMeant to ease some life,\nBring comfort to the mortal world.')).toBe('comfort');
  })
});
