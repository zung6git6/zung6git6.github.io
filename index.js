$(document).ready(function () {
  const username = "zung6git6";
  const apiUrl = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`;

  $.getJSON(apiUrl)
    .done(function (data) {
      const myRepos = data
        .filter(repo => !repo.fork || repo.forks_count > 0)
        .map(repo => ({
          name: repo.name,
          url: repo.html_url,
          description: repo.description || "No available description."
        }));

      const manualCollabRepos = [
        { name: "Model T9 to Sinogram", url: "https://github.com/PerrineQhn/Model_T9_to_Sinogram", description: "Chinese T9 predictive text system inspired by Sogou keyboard. Converts Chinese corpus into Pinyin and T9 sequences, and predicts Chinese characters from keypresses using left-side context." },
        { name: "AI Chatbot", url: "https://github.com/PerrineQhn/ChatBot_FastApi", description: "AI Chatbot web application built with FastAPI, featuring an interactive HTML/CSS/JS interface, contextual conversation handling, Solr-based conversation indexing, and automatic service startup." },
        { name: "MTdV Translator", url: "https://github.com/PerrineQhn/MTdVTranslator", description: "Python implementations of a Turing machine (MTdV) exercises, demonstrating different coding constraints and techniques for recursion, mutable lists, and function design." },
        { name: "MLP Profiler", url: "https://github.com/PerrineQhn/XOR_Project", description: "Enhanced multilayer perceptron implementation with parameter and dataset loading from files, enabling flexible and reproducible configurations. Includes profiling scripts to measure empirical complexity (time and memory) for single neurons, hidden layers, and the entire network." },
        { name: "OpenNMT-AutoTranslation", url: "https://github.com/PerrineQhn/OpenNMT", description: "OpenNMT-based machine translation experiments for Europarl and EMEA corpora, including RNN and Transformer models, lemmatization preprocessing, vocabulary construction, and GPU training configurations." },
        { name: "Keywords extraction", url: "https://github.com/PerrineQhn/Keywords_Extraction_TFIDF_vs_LDA", description: "Comparative analysis of keyword extraction methods using TF-IDF and LDA. The project explores the effectiveness of each approach in identifying relevant terms from text corpora, highlighting differences in term weighting, topic modeling, and semantic representation." },
        { name: "ChineseOCR-CRNN", url: "https://github.com/Guizmoue/Chinese_OCR", description: "Chinese handwritten character recognition project using CRNN and open-source OCR tools. Includes data preprocessing, model training and evaluation, comparisons with Tesseract, EasyOCR, and OpenVINO, and analysis on the CASIA and NewData120 datasets." },
      ];

      const allRepos = [...manualCollabRepos, ...myRepos];

      const projectsHtml = allRepos
        .map(repo => `
          <div class="repo">
            <a href="${repo.url}" target="_blank">${repo.name}</a>
            <div class="desc">${repo.description}</div>
          </div>
        `)
        .join("");

      $("#projects").html(projectsHtml || "No available repository.");
    })
    .fail(function () {
      $("#projects").html("Failed to load the repositories.");
    });
});