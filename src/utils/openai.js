import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: "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", // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default openai;