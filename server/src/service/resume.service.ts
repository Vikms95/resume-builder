import { getDb } from "../gateway/mongo";
import { ResumeType } from "../types";

export const getEmptyResumeCol = async () => {
  const db = await getDb();
  return db.collection<ResumeType>("resumeEmpty");
};

export const getEmptyResume = async () => {
  const col = await getEmptyResumeCol();
  return col.find().toArray();
};

export const getExampleResumeCol = async () => {
  const db = await getDb();
  return db.collection<ResumeType>("resumeExample");
};

export const getExampleResume = async () => {
  const col = await getExampleResumeCol();
  return col.find().toArray();
};
