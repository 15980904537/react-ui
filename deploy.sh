#!/bin/env bash
echo $1
npm version $1 && \
git push

