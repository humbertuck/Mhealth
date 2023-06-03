const quizData = [
    {
      category: "Depression",
      questions: [
        "Have you felt persistently sad or had a loss of interest in activities recently?"
      ]
    },
    {
      category: "Depression",
      questions: [
        "Have you experienced changes in your appetite or weight without intending to change them?"
      ]
    },
    {
      category: "Depression",
      questions: [
        "Do you often feel tired, lacking energy, or find it difficult to complete tasks?"
      ]
    },
    {
      category: "Depression",
      questions: [
        "Have you had difficulty concentrating, making decisions, or remembering things lately?"
      ]
    },
    {
      category: "Depression",
      questions: [
        "Have you had thoughts of self-harm or suicide?"
      ]
    },
    {
      category: "Anxiety",
      questions: [
        "Do you frequently feel excessively worried or anxious about various aspects of your life?"
      ]
    },
    {
      category: "Anxiety",
      questions: [
        "Are you often restless, on edge, or easily irritated?"
      ]
    },
    {
      category: "Anxiety",
      questions: [
        "Do you experience physical symptoms of anxiety, such as a racing heartbeat or shortness of breath?"
      ]
    },
    {
      category: "Anxiety",
      questions: [
        "Do you struggle to control or stop worrying thoughts?"
      ]
    },
    {
      category: "Anxiety",
      questions: [
        "Have you avoided social situations or certain activities due to fear or anxiety?"
      ]
    },
    {
      category: "Stress",
      questions: [
        "Do you feel that your overall stress level is high?"
      ]
    },
    {
      category: "Stress",
      questions: [
        "Have you experienced physical symptoms like headaches, muscle tension, or stomach problems due to stress?"
      ]
    },
    {
      category: "Stress",
      questions: [
        "Do you find it difficult to relax or unwind even when you have free time?"
      ]
    },
    {
      category: "Stress",
      questions: [
        "Has stress affected your sleep patterns, causing difficulty falling asleep or maintaining sleep?"
      ]
    },
    {
      category: "Stress",
      questions: [
        "Have you noticed changes in your ability to concentrate or make decisions as a result of stress?"
      ]
    },
    {
      category: "Post-Traumatic Stress Disorder (PTSD)",
      questions: [
        "Do you experience intrusive memories or flashbacks related to a past traumatic event?"
      ]
    },
    {
      category: "Post-Traumatic Stress Disorder (PTSD)",
      questions: [
        "Do you actively avoid situations, people, or activities that remind you of the traumatic event?"
      ]
    },
    {
      category: "Post-Traumatic Stress Disorder (PTSD)",
      questions: [
        "Do you have persistent negative thoughts or beliefs about yourself, others, or the world since the trauma occurred?"
      ]
    },
    {
      category: "Post-Traumatic Stress Disorder (PTSD)",
      questions: [
        "Do you often feel on edge, easily startled, or hyper-vigilant?"
      ]
    },
    {
      category: "Post-Traumatic Stress Disorder (PTSD)",
      questions: [
        "Have you felt emotionally numb or had difficulty experiencing positive emotions since the traumatic event?"
      ]
    },
    {
      category: "Eating Disorders",
      questions: [
        "Are you preoccupied with thoughts about your body weight, shape, or appearance?"
      ]
    },
    {
      category: "Eating Disorders",
      questions: [
        "Have you engaged in extreme dieting, fasting, or excessive exercise to control your weight or shape?"
      ]
    },
    {
      category: "Eating Disorders",
      questions: [
        "Do you feel guilt, shame, or disgust after eating?"
      ]
    },
    {
      category: "Eating Disorders",
      questions: [
        "Have you noticed significant changes in your eating patterns, such as binge-eating or restricting food intake?"
      ]
    },
    {
      category: "Eating Disorders",
      questions: [
        "Has your self-esteem or self-worth significantly declined based on your body weight or shape?"
      ]
    }
  ];
  
  
  quizData.forEach((questionData, index) => {
    const questionNumber = index + 1;
    const category = questionData.category;
    const question = questionData.questions[0];
  
    console.log(`Question ${questionNumber} (${category}): ${question}`);
    
  });
  


function displayQuiz() {
    const questionContainer = document.getElementById('question');
    const choicesContainer = document.getElementById('choices');
    const nextBtn = document.getElementById('next-btn');
    const resultContainer = document.getElementById('test-result');
    const scoreContainers = {
      Depression: document.getElementById('depression-score'),
      Anxiety: document.getElementById('anxiety-score'),
      Stress: document.getElementById('stress-score'),
      'Post-Traumatic Stress Disorder (PTSD)': document.getElementById('ptsd-score'),
      'Eating Disorders': document.getElementById('ed-score')
    };
    const mainContainer = document.getElementById('card');
    const head = document.getElementById('head');
  
    let shuffledQuizData = shuffleArray(quizData);
    let currentQuestionIndex = 0;
    let scores = {
      Depression: 0,
      Anxiety: 0,
      Stress: 0,
      'Post-Traumatic Stress Disorder (PTSD)': 0,
      'Eating Disorders': 0
    };
  
    function displayQuestion() {
      const currentQuestion = shuffledQuizData[currentQuestionIndex];
      const category = currentQuestion.category;
      const question = currentQuestion.questions[0];
  
      questionContainer.innerHTML = `<p>${question}</p>`;
      choicesContainer.innerHTML = `
       <div class="choices-radio" id="choice-A"><input type="radio" id="q${currentQuestionIndex}-yes" name="q${currentQuestionIndex}" value="yes"><label for="q${currentQuestionIndex}-yes">Yes</label></div>
       <div class="choices-radio" id="choice-B"><input type="radio" id="q${currentQuestionIndex}-no" name="q${currentQuestionIndex}" value="no"><label for="q${currentQuestionIndex}-no">No</label></div>
      `;
      choicesContainer.addEventListener('change', handleChoiceChange);
      nextBtn.disabled = true;
    }
  
    function handleChoiceChange(event) {
      const selectedChoice = event.target.value;
      const category = shuffledQuizData[currentQuestionIndex].category;
  
      scores[category] = selectedChoice === 'yes' ? scores[category] + 1 : scores[category];
      nextBtn.disabled = false;
    }
  
    displayQuestion();
  
    nextBtn.addEventListener('click', function () {
      choicesContainer.removeEventListener('change', handleChoiceChange);
  
      currentQuestionIndex++;
  
      if (currentQuestionIndex < shuffledQuizData.length) {
        displayQuestion();
      } else {
        showResult();
      }
    });
  
    function showResult() {
      resultContainer.style.display = 'block';
      nextBtn.style.display = 'none';
      mainContainer.style.display = 'none';
      head.innerText = "Result";
  
      for (const category in scores) {
        scoreContainers[category].textContent = `${category}: ${scores[category]}`;
      }
    }
  
    
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  }
  
displayQuiz();