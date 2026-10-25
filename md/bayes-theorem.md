# Bayes' Theorem

## Equation

$$
\begin{aligned}
\mark[post]{P(H \mid E)} &= \frac{\mark[like]{P(E \mid H)} \, \mark[prior]{P(H)}}{\mark[evid]{P(E)}} \\[14pt]
\mark[post]{P(H \mid E)} &= \frac{\mark[like]{P(E \mid H)} \, \mark[prior]{P(H)}}{\mark[like]{P(E \mid H)} \, \mark[prior]{P(H)} + \mark[likenot]{P(E \mid \text{not } H)} \, \mark[priornot]{P(\text{not } H)}}
\end{aligned}
$$

## Description

Bayes' theorem turns a conditional probability around. It gives the [probability of a hypothesis after seeing evidence]{.post} from the [probability of that evidence if the hypothesis were true]{.like}, the [probability of the hypothesis beforehand]{.prior}, and the [overall probability of the evidence]{.evid}. The second line writes out that overall probability with the law of total probability: the evidence arises either with the hypothesis or [without it]{.likenot}, weighted by [how common that is]{.priornot}. The numerator reappears as the first part of the denominator, so the posterior is the share of all the ways to see the evidence that come from the hypothesis.

Running example, used in every definition: a disease affects 1% of people. A test detects 99% of sick people, but also wrongly flags 5% of healthy people. You test positive. The hypothesis H is "I have the disease", the evidence E is "my test is positive". Bayes' theorem shows why you are still probably healthy.

Read aloud: [the probability of H given E]{.post} equals [the probability of E given H]{.like} times [the probability of H]{.prior}, over [the probability of E]{.evid}. Written out: the same numerator, over itself plus [the probability of E given not H]{.likenot} times [the probability of not H]{.priornot}.

## .post

Posterior $P(H \mid E)$.

Pronounced: "the probability of H given E".

What to believe after the evidence. In the example, the probability of having the disease given a positive test: $P(\text{sick} \mid +) = \frac{0.99 \cdot 0.01}{0.0594} \approx 0.17$. Only about 17%, despite the 99% detection rate.

In counts: of 10,000 people, 100 are sick and 99 of them test positive; of the 9,900 healthy people, 495 also test positive. So 99 of the 594 positive tests are real: $99 / 594 \approx 17\%$.

Mixing up $P(H \mid E)$ with $P(E \mid H)$ (17% vs. 99% here) is the base-rate fallacy. In confusion-matrix terms, this posterior is the precision of the test.

## .like

Likelihood $P(E \mid H)$.

Pronounced: "the probability of E given H".

How well the hypothesis predicts the evidence. In the example, the probability of a positive test if you are sick: $P(+ \mid \text{sick}) = 0.99$, the test's sensitivity (recall). It describes the test, not you: it is the same in every population, whether the disease is rare or common.

## .prior

Prior $P(H)$.

Pronounced: "the probability of H".

The base rate before the evidence. In the example, the share of people who have the disease: $P(\text{sick}) = 0.01$. It drives the result: in a group where 20% are sick, the same positive test would mean an 83% chance of being sick.

## .evid

Evidence $P(E)$.

Pronounced: "the probability of E".

How often the evidence occurs at all, whether or not the hypothesis is true. In the example, the share of all people who test positive, computed with the law of total probability (previous page) from sick and healthy people:

$P(+) = P(+ \mid \text{sick})\,P(\text{sick}) + P(+ \mid \text{healthy})\,P(\text{healthy}) = 0.99 \cdot 0.01 + 0.05 \cdot 0.99 = 0.0594$.

The second line of the equation shows this sum directly in the denominator. Most of these 5.94% are false alarms from the large healthy group, which is why the posterior is low. Dividing by $P(E)$ makes the posteriors of all hypotheses add up to 1: $P(\text{sick} \mid +) \approx 0.17$ and $P(\text{healthy} \mid +) \approx 0.83$.

With data, all these pieces are counts in a cross-table: `pd.crosstab(df.sick, df.positive, normalize="columns")` gives $P(H \mid E)$ directly, `normalize="index"` gives $P(E \mid H)$.

## .likenot

Probability of the evidence without the hypothesis, $P(E \mid \text{not } H)$.

Pronounced: "the probability of E given not H".

In the example, the probability of a positive test for a healthy person: $P(+ \mid \text{healthy}) = 0.05$, the false positive rate (one minus the specificity). It is small, but multiplied by the large healthy group it produces most of the positive tests: $0.05 \cdot 0.99 = 0.0495$ against $0.99 \cdot 0.01 = 0.0099$ from the sick. Lowering it is the most effective way to make a positive result more meaningful.

## .priornot

Probability that the hypothesis is false, $P(\text{not } H)$.

Pronounced: "the probability of not H".

Always $1 - P(H)$. In the example, $P(\text{healthy}) = 0.99$. With the numbers filled in, the second line reads $\frac{0.99 \cdot 0.01}{0.99 \cdot 0.01 + 0.05 \cdot 0.99} = \frac{0.0099}{0.0594} \approx 0.17$.
