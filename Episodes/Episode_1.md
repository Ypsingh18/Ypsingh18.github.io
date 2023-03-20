## Utilizing LLM to learn a new language
#### Problem 🔒: 
Learning a new language can be a challenging and time-consuming task for many individuals. While traditional language learning methods such as textbooks, audio courses, and language classes can be helpful, they often fail to provide a comprehensive understanding of the language and may not be personalized to the individual's learning style. As a result, there is a growing need for effective and efficient language learning methods that can adapt to the individual learner's needs and preferences.
#### Plan 🔑:
Use Language Model (LM) to facilitate language learning, LMs are AI models that been trained on vast amounts of textual/language data and can generate text that is coherent and grammatically correct. Therefore we can use these models to mock a conversation between a fluent speaker and learner. To keep things simple we will start off training a LLM that is proficent at speaking english.

#### Goals 💸:
Create chat interface (simple chat UI) which lets you communicate with both. Have a conversation about a random topic (bot will decide, to keep the user on his toes) and at the end of the timed session (1 Minute) the bot will go over every comment and explain what could be done better and what was done well !

#### Tech 💻:
LM:
- Dataset
  - DailyDialog: This dataset contains conversations on a variety of topics, such as family, work, and hobbies. It includes over 13,118 dialogues with multiple turns.
  - Persona-Chat: This dataset contains conversations between pairs of crowdworkers who were assigned personas and instructed to chat as if they were those personas. The dataset includes over 160,000 dialogues, each with multiple turns.
- Model 
  - Pytorch: Deep learning framework super simple and quite versitle!
  
Chat UI:
  - Tkinter: https://docs.python.org/3/library/tkinter.html
 
