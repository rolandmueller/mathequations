# Accuracy

## Equation

$$
\mark[acc]{\text{Accuracy}} = \frac{\mark[tp]{TP} + \mark[tn]{TN}}{\mark[tp]{TP} + \mark[tn]{TN} + \mark[fp]{FP} + \mark[fn]{FN}}
$$

## Description

[Accuracy]{.acc} is the share of predictions that are right. The four cells of the confusion matrix sort every prediction: [true positives]{.tp} and [true negatives]{.tn} are correct, while [false positives]{.fp} and [false negatives]{.fn} are the two kinds of mistakes.

Read aloud: [accuracy]{.acc} equals [T P]{.tp} plus [T N]{.tn}, over the total of [T P]{.tp}, [T N]{.tn}, [F P]{.fp} and [F N]{.fn}.

## .acc

Accuracy.

Pronounced: "accuracy".

The fraction of correct predictions, between 0 and 1. The error rate (misclassification rate) is $1 - \text{Accuracy}$; it is the average of the 0-1 loss, which charges 1 for every mistake and 0 otherwise.

Accuracy misleads when classes are imbalanced: if 99% of emails are not spam, always predicting "not spam" scores 99% while catching nothing. It also treats both error types as equally costly, which they rarely are. A loss function with different costs for false positives and false negatives fixes that.

## .tp

True positives $TP$.

Pronounced: "T P", or "true positives".

Cases predicted positive that really are positive. Example: a sick patient whose test says "sick".

## .tn

True negatives $TN$.

Pronounced: "T N", or "true negatives".

Cases predicted negative that really are negative.

## .fp

False positives $FP$.

Pronounced: "F P", or "false positives". Also called Type I errors or false alarms.

Cases predicted positive that are actually negative. Example: a healthy patient told they are sick.

## .fn

False negatives $FN$.

Pronounced: "F N", or "false negatives". Also called Type II errors or misses.

Cases predicted negative that are actually positive. Example: a sick patient sent home as healthy.
