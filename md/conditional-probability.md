# Conditional Probability

## Equation

$$
\mark[cond]{P(A \mid B)} = \frac{\mark[joint]{P(A \cap B)}}{\mark[given]{P(B)}}
$$

## Description

The [probability of A once we know B happened]{.cond} is the [share of cases where both happen]{.joint}, measured only within the [cases where B happens]{.given}. Knowing B shrinks the world to the B-bucket; we then ask how often A occurs inside it. This is exactly what a pandas groupby followed by a mean of a 0/1 column computes.

Read aloud: [the probability of A given B]{.cond} equals [the probability of A and B]{.joint} over [the probability of B]{.given}.

## .cond

Conditional probability $P(A \mid B)$.

Pronounced: "the probability of A given B". The vertical bar reads "given".

Empirically it is a fraction of counts: $\frac{\#(A \text{ and } B)}{\#B}$. With a data frame, `df.groupby("B")["A"].mean()` gives $P(A \mid B)$ for every bucket of $B$ at once (for a 0/1 column $A$); `pd.crosstab(df.B, df.A, normalize="index")` shows it for every value of $A$, with each row summing to 1. A simple predictive "model" just predicts the most likely outcome within each bucket.

Order matters: $P(A \mid B) \ne P(B \mid A)$ in general. Confusing the two is the base-rate fallacy. Bayes' theorem converts one into the other.

## .joint

Joint probability $P(A \cap B)$.

Pronounced: "the probability of A and B". The symbol $\cap$ is "intersection".

The share of all cases in which both events occur. If $A$ and $B$ are independent, $P(A \cap B) = P(A)\,P(B)$, and then $P(A \mid B) = P(A)$: knowing $B$ tells you nothing about $A$.

## .given

Probability of the conditioning event $P(B)$.

Pronounced: "the probability of B".

The size of the bucket we condition on. Small buckets give noisy estimates: a conditional probability computed from 5 cases deserves far less trust than one computed from 5000.
