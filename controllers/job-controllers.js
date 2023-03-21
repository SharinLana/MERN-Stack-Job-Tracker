import { StatusCodes } from "http-status-codes";
import JobModel from "../models/jobModel.js";
import { BadRequestError } from "../errors/index.js";

const getJobs = async (req, res, next) => {
  const jobs = await JobModel.find({ createdBy: req.user.userId });

  res.status(StatusCodes.OK).json({
    status: "success",
    totalJobs: jobs.length,
    jobs,
  });
};

const addJob = async (req, res, next) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide position and company!");
  }

  // Adding the user to the req.body
  req.body.createdBy = req.user.userId;

  const job = await JobModel.create(req.body);

  res.status(StatusCodes.CREATED).json({
    status: "success",
    job,
  });
};

const editJob = async (req, res, next) => {
  const { company, position } = req.body;
  if (!company || !position) {
    throw new BadRequestError("Please provide position and company!");
  }

  const job = await JobModel.findOne({ _id: req.params.id });
  if (!job) {
    throw new BadRequestError(`There's no job with the id: ${req.params.id}`);
  }

  const updatedJob = await JobModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(StatusCodes.OK).json({
    status: "success",
    updatedJob,
  });
};

const deleteJob = async (req, res, next) => {
  res.send("Delete job");
};

const getStats = async (req, res, next) => {
  res.send("Stats");
};

export { getJobs, addJob, editJob, deleteJob, getStats };