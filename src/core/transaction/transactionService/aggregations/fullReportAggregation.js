const fullReportAggregation = id => [
  {
    $match: {
      owner: id,
    },
  },
  {
    $project: {
      _id: 1,
      description: 1,
      type: 1,
      category: 1,
      value: 1,
      date: {
        $dateFromString: {
          dateString: '$date',
        },
      },
    },
  },
  {
    $group: {
      _id: {
        year: {
          $year: '$date',
        },
        month: {
          $month: '$date',
        },
        type: '$type',
        category: '$category',
        description: {
          $toLower: '$description',
        },
        value: '$value',
      },
      arrOfValues: {
        $push: {
          description: {
            $toLower: '$description',
          },
          value: '$value',
        },
      },
    },
  },
  {
    $project: {
      date: {
        $toString: {
          $dateFromParts: {
            year: '$_id.year',
            month: '$_id.month',
          },
        },
      },
      type: '$_id.type',
      category: '$_id.category',
      description: '$_id.description',
      value: {
        $sum: '$arrOfValues.value',
      },
    },
  },
  {
    $sort: {
      value: -1,
    },
  },
  {
    $group: {
      _id: {
        date: '$date',
        type: '$type',
        category: '$category',
        description: {
          $toLower: '$description',
        },
        value: '$value',
      },
      arrOfTransactions: {
        $push: {
          description: {
            $toLower: '$description',
          },
          value: '$value',
        },
      },
    },
  },
  {
    $project: {
      date: '$_id.date',
      type: '$_id.type',
      category: '$_id.category',
      description: '$_id.description',
      arrOfTransactions: '$arrOfTransactions',
    },
  },
  {
    $lookup: {
      from: 'categories',
      localField: 'category',
      foreignField: '_id',
      as: 'category',
    },
  },
  {
    $unwind: {
      path: '$category',
    },
  },
  {
    $project: {
      date: '$date',
      type: '$_id.type',
      category: {
        name: '$category.name',
        _id: '$category._id',
        type: '$category.type',
      },
      totalSum: {
        $sum: '$arrOfTransactions.value',
      },
      arrOfTransactions: '$arrOfTransactions',
    },
  },
  {
    $group: {
      _id: {
        date: '$date',
        type: '$type',
      },
      arrOfCategories: {
        $push: {
          category: '$category',
          totalSum: '$totalSum',
          arrOfTransactions: '$arrOfTransactions',
        },
      },
    },
  },
  {
    $project: {
      date: '$_id.date',
      type: '$_id.type',
      arrOfCategories: '$arrOfCategories',
    },
  },
  {
    $group: {
      _id: {
        date: '$date',
      },
      arrOfTypes: {
        $push: {
          type: '$type',
          arrOfCategories: '$arrOfCategories',
        },
      },
    },
  },
  {
    $project: {
      _id: 0,
      date: '$_id.date',
      arrOfTypes: '$arrOfTypes',
    },
  },
];
module.exports = fullReportAggregation;
